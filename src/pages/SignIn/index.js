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
import React, { useRef } from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  const passwordRef = useRef();

  function handleSubmit() {}

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
            />
            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Digite seu senha"
              ref={passwordRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
            />
            <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
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
