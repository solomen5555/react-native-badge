module.exports = {
  dependency: {
    platforms: {
      android: {
        packageInstance: 'new BadgeNotificationPackage()',
        packageImportPath: 'import com.ntdbadge.BadgeNotificationPackage;',
      },
      ios: {
        sourceDir: './ios',
      },
    },
  },
};
