import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
     fontSize: 14,
    fontFamily: Platform.OS === "android" ? "OpenSans_600SemiBold" : "OpenSans_600SemiBold",
  },
};
