import {StyleSheet} from 'react-native';

const detailPageStyles = StyleSheet.create({
  container: {
    backgroundColor: '#14162F',
    width: '100%',
    height: '100%',
  },
  color: {
    color: 'white',
  },
  header: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    marginTop: '10%',
  },
  leftContent: {
    width: '20%',
    alignItems: 'center',
  },
  rightImage: {
    width: '80%',
    height: '100%',
  },
  Icon: {
    fontSize: 60,
    color: '#4A6495',
  },
  imageFrame: {
    backgroundColor: 'white',
    width: '95%',
    height: '100%',
    borderRadius: 20,
  },
  movDetail: {
    width: '100%',
    marginRight: '3%',
    marginLeft: '3%',
    marginTop: '5%',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Ubuntu-Medium',
    color: 'white',
  },
  sutradara: {
    marginTop: '1%',
    fontSize: 10,
    fontFamily: 'Ubuntu',
  },
  kategoriFrame: {
    marginTop: '3%',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A6495',
    padding: 5,
    borderRadius: 10,
  },
  kategori: {
    fontSize: 15,
    fontFamily: 'Ubuntu',
    color: 'white',
  },
  sinopsisArea: {
    width: '93%',
  },
  sinopsis: {
    marginTop: '3%',
    fontSize: 15,
    fontFamily: 'Ubuntu',
    color: 'white',
    textAlign: 'justify',
  },
});

export default detailPageStyles;
