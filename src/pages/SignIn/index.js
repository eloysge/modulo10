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
import React from 'react';
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
            />
            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Digite seu senha"
            />
            <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
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
