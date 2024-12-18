import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { images } from '../images'; // 기호 및 모양 이미지 모음

const Question63tContent = () => {
  // 가로 방향 기호와 세로 방향 모양 데이터
  const horizontalSymbols = [images.symbol1, images.symbol2, images.symbol3, images.symbol4, images.symbol5]; // 가로 기호 이미지 배열
  const verticalShapes = [images.shape1, images.shape2, images.shape3, images.shape4]; // 세로 모양 이미지 배열

  // 5x6 표 생성
  const rows = 5;
  const cols = 6;

  // 5개 정도만 풀도록 지정
  const initialEmptyCells = [
    { row: 1, col: 1 },
    { row: 2, col: 3 },
    { row: 3, col: 4 },
    { row: 4, col: 2 },
    { row: 4, col: 5 }
  ];

  
  const [selectedCells, setSelectedCells] = useState([]);

  // 빈 칸을 선택하는 함수
  const handleCellClick = (rowIndex, colIndex) => {
    // 문제 풀어야 하는 칸만 선택 가능하게
    if (initialEmptyCells.some(cell => cell.row === rowIndex && cell.col === colIndex)) {
      const cellIndex = selectedCells.findIndex(cell => cell.row === rowIndex && cell.col === colIndex);

      if (cellIndex > -1) {
        setSelectedCells(prev => prev.filter(cell => cell.row !== rowIndex || cell.col !== colIndex)); // 선택 취소
      } else {
        setSelectedCells(prev => [...prev, { row: rowIndex, col: colIndex }]); // 선택 추가
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
            const borderColor = isSelected ? 'blue' : isEmptyCell ? 'red' : '#ccc'; // 테두리 색상 파란색으로

            // 상단 첫 번째 행에만 기호들 배치
            if (rowIndex === 0 && colIndex > 0) {
              return (
                <View key={colIndex} style={[styles.cell, { borderColor }]}>
                  <Image source={horizontalSymbols[colIndex - 1]} style={styles.image} />
                </View>
              );
            }

            // 왼쪽 첫 번째 열에만 모양들 배치
            if (colIndex === 0 && rowIndex > 0) {
              return (
                <View key={colIndex} style={[styles.cell, { borderColor }]}>
                  <Image source={verticalShapes[rowIndex - 1]} style={styles.image} />
                </View>
              );
            }

            // 나머지 셀은 비워둠
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
    aspectRatio: 1, // 정사각형 유지
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
