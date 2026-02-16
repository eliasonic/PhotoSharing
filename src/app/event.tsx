import { View, Text, useWindowDimensions } from 'react-native';
import { AdvancedImage } from 'cloudinary-react-native';
import { cloudinary } from '../lib/cloudinary';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { artisticFilter } from '@cloudinary/url-gen/actions/effect';

export default function Event() {
    // const { width } = useWindowDimensions();
    return (
        <View>
            <Text className='text-white'>Event</Text>
            <AdvancedImage
                cldImg={cloudinary
                    .image("epnhlbosanr366jrd6li")
                    // .resize(thumbnail().width(width).height(width * (4 / 3)))
                    .resize(thumbnail().width(200).height(200))
                    .effect(artisticFilter('incognito'))
                }
                className='w-full aspect-[3/4]'
            />
        </View>
    )
}