import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler'

import styles from './styles'; 
  
import api from '../../services/api';

interface Indicators{ 
  valorVendaTotalBruta: number;
  valorVendaTotalBrutaMes: number;
  valorVendaTotalLiquida: number;
  valorVendaTotalLiquidaMes: number;
  qntProdutosVendidos: number;
  valorTotalFiado: number;
  qntVendasFiado: number;
  qntClientesCadastrados: number;
  custoTotais: number;
  custoTotaisMes: number;
}

const Indicators: React.FC = () => {  
  const [indicators, setIndicators] = useState<Indicators>({valorVendaTotalBruta:0, valorVendaTotalBrutaMes:0,valorVendaTotalLiquida:0,valorVendaTotalLiquidaMes:0,qntProdutosVendidos:0,valorTotalFiado:0,qntVendasFiado:0,qntClientesCadastrados:0,custoTotais:0,custoTotaisMes:0});
  
  useFocusEffect(
    React.useCallback(() => { 
      api.get<Indicators>('sale/indicators')
               .then(response => {                 
                setIndicators(response.data);  
    })
    }, [])
  );
  
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerIcon}>Indicadores</Text>
      </View>
    
      <ScrollView style={styles.landingContent}>
          
        <View style={styles.buttonsContainer}>  
          <View style={[styles.button, styles.buttonPrimary]}  >
            <Text style={styles.label}>Vendas Líquida Bruta</Text>
            <Text style={styles.value}>R$ {indicators.valorVendaTotalLiquida ? indicators.valorVendaTotalLiquida.toFixed(2) : 'R$ 0,00'}</Text>
          </View>
          <View style={[styles.button, styles.buttonSecondary, {marginBottom: 15}]} >
            <Text style={styles.label}>Vendas Líquida no Mês</Text>
            <Text style={styles.value}>R$ {indicators.valorVendaTotalLiquidaMes ? indicators.valorVendaTotalLiquidaMes.toFixed(2) : 'R$ 0,00'}</Text>
          </View>

          <View style={[styles.button, styles.buttonPrimary]}  >
            <Text style={styles.label}>Vendas Bruta</Text>
            <Text style={styles.value}>R$ {indicators.valorVendaTotalBruta ? indicators.valorVendaTotalBruta.toFixed(2) : 'R$ 0,00'}</Text>
          </View>
          <View style={[styles.button, styles.buttonSecondary, {marginBottom: 15}]} >
            <Text style={styles.label}>Vendas Bruta no Mês Atual</Text>
            <Text style={styles.value}>R$ {indicators.valorVendaTotalBrutaMes ? indicators.valorVendaTotalBrutaMes.toFixed(2) : 'R$ 0,00'}</Text>
          </View>

          <View style={[styles.button, styles.buttonPrimary]}  >
            <Text style={styles.label}>Qnt Vendas Fiadas</Text>
            <Text style={styles.value}>{indicators.qntVendasFiado ? indicators.qntVendasFiado.toFixed(2) : '0'}</Text>
          </View>
          <View style={[styles.button, styles.buttonSecondary, {marginBottom: 15}]} >
            <Text style={styles.label}>Valor Bruto em Vendas Fiadas</Text>
            <Text style={styles.value}>R$ {indicators.valorTotalFiado ? indicators.valorTotalFiado.toFixed(2) : 'R$ 0,00'}</Text>
          </View>

          <View style={[styles.button, styles.buttonPrimary]} >
            <Text style={styles.label}>Valor dos Gastos Bruto</Text>
            <Text style={styles.value}>R$ {indicators.custoTotais ? indicators.custoTotais.toFixed(2) : 'R$ 0,00'}</Text>
          </View> 
          <View style={[styles.button, styles.buttonSecondary, {marginBottom: 15}]}  >
            <Text style={styles.label}>Valor dos Gastos Mês Atual</Text>
            <Text style={styles.value}>R$ {indicators.custoTotaisMes ? indicators.custoTotaisMes.toFixed(2) : 'R$ 0,00'}</Text>
          </View>

          <View style={[styles.button, styles.buttonPrimary]}  >
            <Text style={styles.label}>Qnt Produtos Vendidos</Text>
            <Text style={styles.value}>{indicators.qntProdutosVendidos ? indicators.qntProdutosVendidos : '0'}</Text>
          </View>
          
          <View style={[styles.button, styles.buttonSecondary, {marginBottom: 15}]} >
            <Text style={styles.label}>Qnt Clientes Cadastrados</Text>
            <Text style={styles.value}>{indicators.qntClientesCadastrados ? indicators.qntClientesCadastrados : '0'}</Text>
          </View>
        </View> 

      
      </ScrollView>

    </View>
  );
}

export default Indicators;