import React, { Fragment } from 'react';
import Context from '../Context';
import { RegisterMutation } from '../container/RegisterMutation';
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
                        <UserForm title='Iniciar Sesión' onSubmit={activateAuth} />
                    </Fragment>
                )
            }
        }
    </Context.Consumer>
)