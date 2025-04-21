import { View, Text, Image, TextInput } from "react-native";
import styles from "../../assets/styles/login.styles";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {};

  return (
    <View style={styles.container}>
      {/* ILLUSTRATION */}
      <View style={styles.topIllustration}>
        <Image
          source={require("../../assets/images/Autism-bro.png")}
          style={styles.illustrationImage}
          resizeMode="contain"
        />
      </View>

    </View>
  );
}