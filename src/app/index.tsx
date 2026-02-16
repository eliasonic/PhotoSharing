import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View className='flex-1 items-center justify-center gap-4'>
      <Link href='/camera' className='text-white'>
        Open Camera
      </Link>

      <Link href='/event' className='text-white'>
        Event details
      </Link>
    </View>
  );
}