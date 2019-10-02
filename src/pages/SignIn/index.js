/**
 * yarn add react-native-linear-gradient
 * react-native link react-native-linear-gradient (enquanto não estiver atualizada, precisará de fazer o link)
 *
 * iOS:
 * cd ios
 * pod install
 *
 * (sera necessarios: react-native run ios, novamente.)
 *
 */
import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';
import { signInResquest } from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const loading = useSelector(state => state.auth.loading);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  function handleSubmit() {
    dispatch(signInResquest(email, pass));
  }

  return (
    <>
      <Background>
        <Container>
          <Image source={logo} />
          <Form>
            <FormInput
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite seu e-mail"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />
            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Digite seu senha"
              ref={passwordRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={pass}
              onChangeText={setPass}
            />
            <SubmitButton onPress={handleSubmit} loading={loading}>
              Acessar
            </SubmitButton>
          </Form>
          <SignLink
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <SignLinkText>Criar nova conta</SignLinkText>
          </SignLink>
        </Container>
      </Background>
    </>
  );
}
