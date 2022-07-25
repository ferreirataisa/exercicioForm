import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { getState: { reducer } } = this.props;
    console.log(reducer);
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          { reducer.personal.name }
        </div>
        <div>
          Email:
          { reducer.personal.email }
        </div>
        <div>
          CPF:
          { reducer.personal.cpf }
        </div>
        <div>
          Endereço:
          { reducer.personal.address }
        </div>
        <div>
          Cidade:
          { reducer.personal.city }
        </div>
        <div>
          Estado:
          { reducer.personal.uf }
        </div>
        <div>
          Currículo:
          { reducer.professional.curriculum }
        </div>
        <div>
          Cargo:
          { reducer.professional.job }
        </div>
        <div>
          Descrição do cargo:
          { reducer.professional.description }
        </div>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  getState: PropTypes.shape({
    personal: PropTypes.shape({
      nome: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      cpf: PropTypes.string.isRequired,
      endereco: PropTypes.string.isRequired,
      cidade: PropTypes.string.isRequired,
      estado: PropTypes.string.isRequired,
    }).isRequired,
    professional: PropTypes.shape({
      curriculum: PropTypes.string.isRequired,
      job: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  getState: state,
});

export default connect(mapStateToProps, null)(FormDataDisplay);
