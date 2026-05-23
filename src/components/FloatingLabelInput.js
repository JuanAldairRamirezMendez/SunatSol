import { useEffect, useMemo } from "react";
import { TextInput, Text, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

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
    <View className={`rounded-2xl border border-slate-200 bg-white px-4 pb-3 pt-4 ${className}`}>
      <Animated.Text className="mb-2 text-[13px] font-semibold text-slate-500" style={labelStyle}>
        {label}
      </Animated.Text>
      <View className="flex-row items-center">
        {hasPrefix ? <Text className="mr-2 text-base font-semibold text-slate-500">{prefix}</Text> : null}
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
          className="flex-1 py-1 text-[16px] text-slate-900"
        />
      </View>
    </View>
  );
}