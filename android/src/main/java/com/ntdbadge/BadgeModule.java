package com.ntdbadge;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.os.Build;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;
import com.facebook.react.bridge.*;
import android.util.Log;

public class BadgeModule extends ReactContextBaseJavaModule {
    public BadgeModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "BadgeNotification";
    }

    private void createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel channel = new NotificationChannel(
                    "ntd_badge_channel", "NTD Badge", NotificationManager.IMPORTANCE_LOW);
            channel.setDescription("Badge channel");
            NotificationManager manager = getReactApplicationContext().getSystemService(NotificationManager.class);
            manager.createNotificationChannel(channel);
        }
    }

    @ReactMethod
    public void setBadgeCount(int count) {
        Log.d("BadgeNotification", "setBadgeCount called with count = " + count);
        NotificationManagerCompat manager = NotificationManagerCompat.from(getReactApplicationContext());
        manager.cancelAll();
        if (count > 0) {
            createNotificationChannel();
            NotificationCompat.Builder builder = new NotificationCompat.Builder(getReactApplicationContext(),
                    "ntd_badge_channel")
                    .setSmallIcon(android.R.drawable.ic_dialog_info)
                    .setContentText("Unread: " + count)
                    .setNumber(count)
                    .setPriority(NotificationCompat.PRIORITY_LOW);
            manager.notify(1, builder.build());
        }
    }
}
