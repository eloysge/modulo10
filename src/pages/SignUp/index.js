/**
 * yarn add react-native-linear-gradient
 * react-native link react-native-linear-gradient (enquanto não estiver atualizada, precisará de fazer o link)
 *
 * iOS:
 * cd ios
 * pod install
 *
 * (sera necessarios: react-native run ios, novamente.)
 */
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';
import { signUpRequest } from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const loading = useSelector(state => state.auth.loading);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  useEffect(() => {
    setName('');
    setEmail('');
    setPass('');
  }, [loading]);

  function handleSubmit() {
    dispatch(signUpRequest(name, email, pass));
  }

  return (
    <>
      <Background>
        <Container>
          <Image source={logo} />
          <Form>
            <FormInput
              icon="person-outline"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nome completo"
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              value={name}
              onChangeText={setName}
            />
            <FormInput
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="E-mail"
              ref={emailRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />
            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Senha"
              ref={passwordRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={pass}
              onChangeText={setPass}
            />
            <SubmitButton loading={loading} onPress={handleSubmit}>
              Criar
            </SubmitButton>
          </Form>
          <SignLink
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            <SignLinkText>Já tenho conta</SignLinkText>
          </SignLink>
        </Container>
      </Background>
    </>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
