import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

//import icon
import Feather from 'react-native-vector-icons/Feather';

//import carousel
import Carousel from 'react-native-snap-carousel';

//import fake data
import { sliderData } from '../models/data';

//import component BannerSlider
import BannerSlider from '../components/BannerSlider';

//import dimensions
import { windowWidth } from '../utils/Dimensions';

export default function Home() {

  //method renderBanner
  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Hello Jhon Doe</Text>
          <ImageBackground
            source={require('../assets/images/user-profile.jpg')}
            style={{width: 35, height: 35}}
            imageStyle={{borderRadius: 25}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 8,
            paddingVertical: 6,
            paddingBottom: 6,
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginLeft: 5, marginRight: 5, paddingTop: 13}}
          />
          <TextInput placeholder="Search" style={{marginLeft: 5}} />
        </View>

        <View style={{
            flexDirection: 'row',
            marginVertical: 15,
            justifyContent: 'space-between', 
         }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Upcoming Games</Text>
          <TouchableOpacity>
              <Text style={{ fontSize: 18, color: '#0aada8' }}>See All</Text>
          </TouchableOpacity>
        </View>
        
         <Carousel 
            data={sliderData}
            renderItem={renderBanner}
            sliderWidth={windowWidth - 40}
            itemWidth={300}
            loop={true}
         />

      </ScrollView>
    </SafeAreaView>
  );
}
