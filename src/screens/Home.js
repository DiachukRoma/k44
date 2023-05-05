import { Button, View } from 'react-native';
import { Dimensions } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const screenWidth = Dimensions.get('window').width;

export default function Home() {
	return (
		<View>
			<YoutubePlayer
				width={screenWidth}
				height={300}
				videoId={"K17hcSlGhow"}
			/>
		</View>
	);
}
