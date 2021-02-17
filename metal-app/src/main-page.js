import React, { Component } from 'react';
import ActionMenu from './components/ActionMenu';
import Tabla from './components/Tabla';
import Modal from './components/Modal';
import ComponentField from "./components/ComponentField"
import News from './components/NewsPanel/News';
import { listarEntidad, crearEditarEntidad, deleteEntidad, getOne } from './servicio';

const inicialOptions = {
  state: [
    { value: "Activo", tag: "Activo" },
    { value: "No activo", tag: "No activo" },
    { value: "Sin Infomracion", tag: "Sin Información" }
  ],
  style: [
    { value: "Power Metal", tag: "Power Metal" },
    { value: "Metal", tag: "Metal" },
    { value: "Heavy Metal", tag: "Heavy Metal" },
    { value: "Trash Metal", tag: "Trash Metal" },
    { value: "Speed Metal", tag: "Speed Metal" },
    { value: "Death Metal", tag: "Death Metal" },
    { value: "Black Metal", tag: "Black Metal" },
    { value: "Doom Metal", tag: "Doom Metal" },
    { value: "Nu Metal", tag: "Nu Metal" },
    { value: "Glam Metal", tag: "Glam Metal" }
  ],
  bandas:[],
  artistas:[]

}


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      entidades: [],
      objeto: {},
      idObjeto: null,
      method: "POST",
      columnas: [],
      options: inicialOptions,
      search: "",
      bandas: "",
      artistas: "",
    };
  }


  changeModal = (_event, method = "POST", newState = {}  ) => {
    let _newState = {
      ...newState,
      showModal: !this.state.showModal,
      method
    };
    if (method === "POST") {
      _newState = { ..._newState, idObjeto: null, objeto: {} };
    }

    this.getOpctionsFromBack(_newState)

  }

  listar = async (_event = null) => {
    if(_event) {
      _event.preventDefault();
    }
    const { entidad } = this.props;
    const { search , columnas, bandas, artistas} = this.state;
    const entidades = await listarEntidad({ entidad, search, columnas, bandas, artistas });

    console.log({entidad, search, columnas, entidades})

    let _columnas = [];
    if (Array.isArray(entidades) & entidades.length > 0) {
      _columnas = Object.keys(entidades[0]).filter(e => e !== "_id") || [];

    }
    this.setState({ entidades, columnas: _columnas });
  }

  manageInput = (event) => {
    const {
      target: { value, name } } = event;
    let { objeto } = this.state;
    objeto = { ...objeto, [name]: value };
    this.setState({ objeto });

  }

  createEntity = async (_event) => {
    const { entidad } = this.props;
    let { objeto, method, idObjeto } = this.state;

    await crearEditarEntidad({ entidad, objeto, method, idObjeto });
    this.changeModal(_event, "POST", { objeto:{}, idObjeto:null } );
  } 

  getOpctionsFromBack = async (newState) => {
    const { options } = this.state;
    const bandasPromise = listarEntidad({ entidad: "bands" });
    const artistasPromise = listarEntidad({ entidad: "artists" });

    let [bandas = [], artistas = []] = await Promise.all([bandasPromise, artistasPromise]);

    bandas = bandas.map((_banda, index) => ({
      value: _banda.id,
      tag: `${_banda.name} (${_banda.style})`
    }))

    artistas = artistas.map((_artista, index) => ({
      value: _artista.id,

      tag: `${_artista.name} ${_artista.apellido}`

    }))

    const newOptions = { ...options, bandas, artistas };
    console.log(newOptions)

    this.setState({ ...newState, options: newOptions })

    this.listar();


  }

  editEntity = async (_event, index) => {
    const { entidad } = this.props;

    const objeto = await getOne({ entidad, idObjeto: index })
    const newState = { objeto, idObjeto: index };

    this.changeModal(null, "PUT", newState);

  }

  deleteEntidad = async (_event, index) => {
    const { entidad } = this.props;
    const response = await deleteEntidad({ entidad, idObjeto: index });
    console.log(response)
    this.listar();

  }

  manageSearchInput = (event) => {
    const {
      target: { value } } = event;
    let { search } = this.state;
    search = value ;
    this.setState({ search });

  }

  componentDidMount() {
    this.listar();

  }

  render() {

    const { title = "Pagina sin titulo", entidad } = this.props;
    const { columnas, idObjeto, entidades, objeto, options, } = this.state;
 
    return (
      <>

      <News />

        <ActionMenu 
        title={title} 
        changeModal={this.changeModal} 
        manageSearchInput={this.manageSearchInput}
        showSearch={this.listar}
        />

        <Tabla
          entidades={entidades}
          editEntity={this.editEntity}
          deleteEntidad={this.deleteEntidad}
          columnas={columnas}
        />

        {this.state.showModal &&
          <Modal
            changeModal={this.changeModal}
            manageInput={this.manageInput}
            createEntity={this.createEntity}
            entidad={entidad}
            idObjeto={idObjeto}
          >
            {columnas.map((col, index) => (
              < ComponentField
                key={index}
                manageInput={this.manageInput}
                objeto={objeto}
                nombreCampo={col}
                options={options}
              />
            )

            )}

          </Modal>
        }
      </>
    );
  }
}

export default MainPage;
