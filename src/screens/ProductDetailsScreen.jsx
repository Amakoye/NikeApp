import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import products from "../data/products";

const ProductDetailsScreen = () => {
  const product = products[0];

  const { width } = useWindowDimensions();

  const addToCart = () => {
    console.warn("Add to cart");
  };

  return (
    <View>
      <ScrollView>
        {/* Image carousel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{
                uri: item,
              }}
              style={{
                width: width,
                aspectRatio: 1,
              }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          {/* title */}
          <Text style={styles.title}>{product.name}</Text>
          {/* price */}
          <Text style={styles.price}>${product.price}</Text>
          {/* description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      {/* add to cart button */}
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
      {/* navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "300",
    lineHeight: 30,
    textAlign: "justify",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 12,
    borderRadius: 100,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default ProductDetailsScreen;
