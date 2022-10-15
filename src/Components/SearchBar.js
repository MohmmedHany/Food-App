import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <AntDesign name="search1" style={styles.icon} color="black" />
      <TextInput
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#E8E8E8",
    borderRadius: 5,
    marginHorizontal: 15,
    height: 50,
    flexDirection: "row",
    marginTop: 15,
    marginBottom : 15,
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 12,
  },
});

export default SearchBar;
