import { StyleSheet, Text } from "react-native";
import { theme } from "@/components/styles";

interface TitleProps {
  name: string;
  upperCase?: boolean;
}

const Title = ({ name, upperCase }: TitleProps) => {
  let text = name;
  if (upperCase) {
    text = name.toUpperCase();
  }
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: theme.tint,
  },
});

export default Title;
