import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import * as Splash from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Black: require("./../assets/fonts/Inter-Black.ttf"),
    Light: require("./../assets/fonts/Inter-Light.ttf"),
    Regular: require("./../assets/fonts/Inter-Regular.ttf"),
    Medium: require("./../assets/fonts/Inter-Medium.ttf"),
    Semibold: require("./../assets/fonts/Inter-SemiBold.ttf"),
    Bold: require("./../assets/fonts/Inter-Bold.ttf"),
    Italic: require("./../assets/fonts/Inter-Italic.ttf"),
  });

  const onRootLayoutView = useCallback(async () => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (fontsLoaded) {
      onRootLayoutView();
    }
  }, [fontsLoaded, onRootLayoutView]);

  return <Stack onLayout={onRootLayoutView()} />;
}
