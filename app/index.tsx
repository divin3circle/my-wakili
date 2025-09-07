import { Button } from "@/components/ui/button";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button className="rounded-xl bg-rose-500">
        <Text>Hello Sylus</Text>
      </Button>
      <Text className="text-red-500 text-2xl font-bold">Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
