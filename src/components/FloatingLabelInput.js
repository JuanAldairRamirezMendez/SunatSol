import { useEffect, useMemo } from "react";
import { TextInput, Text, View, StyleSheet } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 16,
    marginVertical: 8,
  },
  label: {
    marginBottom: 8,
    fontSize: 13,
    fontWeight: "600",
    color: "#94A3B8",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  prefix: {
    marginRight: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#94A3B8",
  },
  input: {
    flex: 1,
    paddingVertical: 4,
    fontSize: 16,
    color: "#0F172A",
  },
});

export function FloatingLabelInput({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  autoCapitalize,
  prefix,
  secureTextEntry = false,
  className = "",
  maxLength,
}) {
  const focus = useSharedValue(value ? 1 : 0);

  useEffect(() => {
    focus.value = withTiming(value ? 1 : 0, { duration: 180 });
  }, [focus, value]);

  const labelStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: interpolate(focus.value, [0, 1], [12, -8]) }, { scale: interpolate(focus.value, [0, 1], [1, 0.84]) }],
    opacity: interpolate(focus.value, [0, 1], [0.72, 1]),
  }));

  const hasPrefix = useMemo(() => Boolean(prefix), [prefix]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.label, labelStyle]}>
        {label}
      </Animated.Text>
      <View style={styles.inputRow}>
        {hasPrefix ? <Text style={styles.prefix}>{prefix}</Text> : null}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#94A3B8"
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          onFocus={() => {
            focus.value = withTiming(1, { duration: 180 });
          }}
          onBlur={() => {
            focus.value = withTiming(value ? 1 : 0, { duration: 180 });
          }}
          style={styles.input}
        />
      </View>
    </View>
  );
}