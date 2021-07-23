/* eslint-disable import/prefer-default-export */

export const commonNavigationOptions = (navigation, screenProps) => ({
  title: navigation.getParam('title') || navigation.state.routeName,
  headerStyle: {
    borderBottomWidth: 0,
    backgroundColor: screenProps.theme.color.primary || '#409EFF',
    // height: 44,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontSize: 18,
  },
  headerTintColor: screenProps.theme.txtColor.primary || '#303133',
  // headerLeft: <NavButton />,
});
