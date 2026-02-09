import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View className='flex-1 items-center justify-center bg-neutral-800'>
      <Text className='text-2xl font-bold text-white'>Home</Text>
      <Ionicons name='add' size={24} color='white' />
      <Link href='/camera' className='text-white'>
        Open Camera
      </Link>
    </View>
  );
}