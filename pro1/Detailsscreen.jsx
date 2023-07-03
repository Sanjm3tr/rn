import * as React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Button, Card, Text } from "react-native-paper";

export default function DetailsScreen({ route }) {
  const { cardId } = route.params;
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://dev.to/api/articles/${cardId}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);
  console.log(post);
  return (
    <SafeAreaView>
      <ScrollView>
        <Text variant="headlineSmall">{post.title}</Text>
        <Card.Content>
          <Text>{post.body_markdown}</Text>
          {/* <Card.Cover source={{ uri: post.cover_image }}></Card.Cover> */}
          <Text variant="titleMedium">Posted by: {post.user.name}</Text>
        </Card.Content>
      </ScrollView>
    </SafeAreaView>
  );
}
