import React, { Fragment, useContext, useState } from 'react'

import UserAuthContext from '../context/UserAuthContext'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'
import { Tabs, Tab } from './styles'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(UserAuthContext.Context)
  const [section, setSection] = useState('register')

  return (
    <Fragment>
      <Tabs>
        <Tab className={section === 'register' ? 'active' : ''} onClick={() => setSection('register')}>Regitro</Tab>
        <Tab className={section === 'login' ? 'active' : ''} onClick={() => setSection('login')}>Inicio de sesión</Tab>
      </Tabs>
      {
        section === 'register' &&
          <RegisterMutation>
            {
              (register, { error, loading }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables })
                    .then(() => {
                      activateAuth()
                    })
                }

                const errorMessage = error && 'EL usuario ya existe o hay algún problema'
                return <UserForm error={errorMessage} disabled={loading} title='Registrarse' onSubmit={onSubmit} />
              }
            }
          </RegisterMutation>
      }

      {
        section === 'login' &&
          <LoginMutation>
            {
              (login, { error, loading }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  login({ variables })
                    .then(() => {
                      activateAuth()
                    })
                }

                const errorMessage = error && 'EL usuario ya existe o hay algún problema'

                return (
                  <UserForm error={errorMessage} disabled={loading} title='Iniciar sesión' onSubmit={onSubmit} />
                )
              }
            }
          </LoginMutation>
      }
    </Fragment>
  )
}
