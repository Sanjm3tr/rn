import * as React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Button, Card, Text } from "react-native-paper";

export default function HomeScreen({}) {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=ben`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
      });
  }, []);
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <ScrollView>
        {article?.map(({ title, cover_image, tags, id }, index) => (
          <Card
            type="elevated"
            key={id}
            style={{ marginTop: 5 }}
            onPress={() => navigation.navigate("Details", { cardId: id })}
          >
            <Card.Content>
              <Text variant="titleLarge">{title}</Text>
              <Text>{tags}</Text>
              <Card.Cover source={{ uri: cover_image }}></Card.Cover>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
