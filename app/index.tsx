import { Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import React, {useState} from 'react';
import axios from "axios";
import {styles} from '../src/css/styles';

export default function Index() {

  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState([]);

  const fetchQuote = async() => {
    setLoading(true);
    try{
      const response = await axios.get('https://api.kanye.rest');
      setQuote(response.data.quote);
    }catch(error){
      console.error("erro ao buscar dados", error);
      setQuote("Não foi possível carregar a frase Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
       <Text style={styles.title}>Kanye Says:</Text>
      {loading ? (<ActivityIndicator
      style={styles.loading} size="large" color="#0000ff"/>) : (
        <View style={styles.box}>
        <Text style={styles.texto}>{quote || "pressione o botao para uma frase"}</Text>
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={fetchQuote}> 
        <Text>obter frase</Text>
      </TouchableOpacity>
    
    </View>
    );
}
