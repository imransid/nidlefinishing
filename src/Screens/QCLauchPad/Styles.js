import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

const Styles = ScaledSheet.create({
  container: {
    flex: 1
  },
  imgHeight: {
    height: '100%'
  },
  qualityTypeButtonIcon: {
    fontSize: 64
  },
  drawerBtn: {
    alignSelf: 'flex-start',
    position: 'absolute',
    left: scale(30),
    top: verticalScale(15)
  },
  linearGradientStyle: {
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
    position: 'relative',
    overflow: 'hidden'
  },
  backgroundImageStyle: {
    flex: 1,
    width: null,
    height: null
  },
  qualityTypeContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  SectionHeaderStyle: {
    backgroundColor: '#bfbfbf',
    fontSize: 20,
    padding: 5
  },
  launchPadContainer: {
    width: scale(300),
    height: 120,
    margin: 6
  },
  buttonShadow: {
    shadowColor: '#000',
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(50)
  },
  SelectTypeBtn: {
    width: 355,
    height: 135,
    backgroundColor: '#43A6FF',
    borderRadius: 25,
    paddingVertical: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  qualityTypeText: {
    color: '#fff',
    fontSize: 25
  },
  SectionListItemStyle: {
    fontSize: 15,
    padding: 15,
    color: '#000',
    backgroundColor: '#F5F5F5'
  },
  TouchableOpacityStyle: {
    position: 'relative',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30
  },
  QualityTypBtn: {
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  BgOne: {
    backgroundColor: '#9FB2FF'
  },
  BgTwo: {
    backgroundColor: '#FEA6A6'
  },
  BgThree: {
    backgroundColor: '#8BC6FC'
  },
  Dnone: {
    display: 'none'
  },
  RowCenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  p10: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  workProcessText: {
    fontSize: 30
  },
  forText: {
    fontSize: 13,
    color: '#fff',
    paddingTop: 5,
    paddingLeft: 5
  },
  QualityPatrHoldr: {
    position: 'absolute',
    right: 0,
    zIndex: -1,
    height: '100%'
  }
});

export default Styles;
