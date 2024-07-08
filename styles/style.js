import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'react-native-paper';


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#294985FF',
        accent: '#03dac4',
        background: '#F6F5F4FF',
        text: '#2C2C2CFF'
    },
};

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    authSurface: {
        padding: 30,
        borderRadius: 10,
        elevation: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: theme.colors.primary,
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginTop: 8,
        paddingVertical: 8,
        color: theme.colors.primary,
    },
    textButton: {
        marginTop: 16,
    },

    mainSurface: {
        padding: 24,
        borderRadius: 8,
        elevation: 4,
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        maxWidth: 400,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 16,
    },
    mainTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: theme.colors.primary,
        marginBottom: 16,
    },
    mainText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 24,
        color: theme.colors.text,
    },
    mainButton: {
        width: '100%',
        marginTop: 8,
        color: theme.colors.primary,
    },
    mainButtonContent: {
        height: 48,
        flexDirection: 'row-reverse',
    },
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: theme.colors.background,
        padding: 16,
      },
      profileSurface: {
        padding: 24,
        borderRadius: 8,
        elevation: 4,
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 16,
      },
      userInfo: {
        alignItems: 'center',
        marginTop: 16,
      },
      userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.primary,
      },
      userEmail: {
        fontSize: 14,
        color: theme.colors.text,
      },
      logoutButton: {
        marginTop: 16,
      },
      buttonGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 16,
      },
      gridButton: {
        width: '48%',
        marginBottom: 16,
      },
      statsSurface: {
        padding: 24,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
      },
      statsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
        color: theme.colors.primary,
      },
      statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      statItem: {
        width: '48%',
        alignItems: 'center',
        marginBottom: 16,
      },
      statValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.primary,
      },
      statLabel: {
        fontSize: 14,
        color: theme.colors.text,
      },
      statusBar: {
        height: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 16,
      },
      statusBarUserInfo: {
        flex: 1,
        marginLeft: 16,
      },
      statusBarUsername: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      statusBarEmail: {
        fontSize: 14,
        color: theme.colors.placeholder,
      },
});
