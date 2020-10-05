import React, { Fragment } from 'react';
import Context from '../Context';
import { RegisterMutation } from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation';
import { UserForm } from '../components/UserForm/index';

export const NotRegisteredUser = () => (
    <Context.Consumer>
        {
            ({ activateAuth }) => {
                return (
                    <Fragment>
                        <RegisterMutation>
                            {
                                (register, { data, loading, error }) => {
                                    const onSubmit = ({ email, password }) => {
                                        const input = { email, password }
                                        const variables = { input }
                                        register({ variables }).then(activateAuth)
                                    }

                                    const errorMsg = error && 'El usuario ya existe o hay algun problema.'

                                    return (
                                        <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit} />
                                    )
                                }
                            }
                        </RegisterMutation>

                        <LoginMutation>
                            {
                                (login, { data, loading, error }) => {
                                    const onSubmit = ({ email, password }) => {
                                        const input = { email, password }
                                        const variables = { input }
                                        login({ variables }).then(activateAuth)
                                    }

                                    const errorMsg = error && 'La contraseña no es correcta o el usuario no existe.'
                                    return (
                                        <UserForm disabled={loading} error={errorMsg} title='Iniciar Sesión' onSubmit={activateAuth} />
                                    )
                                }
                            }
                        </LoginMutation>
                    </Fragment>
                )
            }
        }
    </Context.Consumer>
)