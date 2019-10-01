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

export default function SignUp({ navigation }) {
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
            />
            <FormInput
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="E-mail"
            />
            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Senha"
            />
            <SubmitButton onPress={() => {}}>Criar</SubmitButton>
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
