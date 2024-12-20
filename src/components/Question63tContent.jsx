import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { images } from '../images'; 

const Question63tContent = () => {
  
  const horizontalSymbols = [images.symbol1, images.symbol2, images.symbol3, images.symbol4, images.symbol5]; 
  const verticalShapes = [images.shape1, images.shape2, images.shape3, images.shape4]; 

  
  const rows = 5;
  const cols = 6;

  
  const initialEmptyCells = [
    { row: 1, col: 1 },
    { row: 2, col: 3 },
    { row: 3, col: 4 },
    { row: 4, col: 2 },
    { row: 4, col: 5 }
  ];

  
  const [selectedCells, setSelectedCells] = useState([]);

  
  const handleCellClick = (rowIndex, colIndex) => {
    
    if (initialEmptyCells.some(cell => cell.row === rowIndex && cell.col === colIndex)) {
      const cellIndex = selectedCells.findIndex(cell => cell.row === rowIndex && cell.col === colIndex);

      if (cellIndex > -1) {
        setSelectedCells(prev => prev.filter(cell => cell.row !== rowIndex || cell.col !== colIndex)); 
      } else {
        setSelectedCells(prev => [...prev, { row: rowIndex, col: colIndex }]); 
      }
    }
  };

  return (
    <View style={styles.grid}>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {Array.from({ length: cols }).map((_, colIndex) => {
            const isEmptyCell = initialEmptyCells.some(cell => cell.row === rowIndex && cell.col === colIndex);
            const isSelected = selectedCells.some(cell => cell.row === rowIndex && cell.col === colIndex);
            const borderColor = isSelected ? 'blue' : isEmptyCell ? 'red' : '#ccc'; 

            
            if (rowIndex === 0 && colIndex > 0) {
              return (
                <View key={colIndex} style={[styles.cell, { borderColor }]}>
                  <Image source={horizontalSymbols[colIndex - 1]} style={styles.image} />
                </View>
              );
            }

            
            if (colIndex === 0 && rowIndex > 0) {
              return (
                <View key={colIndex} style={[styles.cell, { borderColor }]}>
                  <Image source={verticalShapes[rowIndex - 1]} style={styles.image} />
                </View>
              );
            }

            
            return (
              <View
                key={colIndex}
                style={[styles.cell, { borderColor }]}
                onTouchEnd={() => handleCellClick(rowIndex, colIndex)}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    width: '100%',
    flexDirection: 'column',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    aspectRatio: 1, 
    borderWidth: 1,
    borderColor: '#ccc', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default Question63tContent;
