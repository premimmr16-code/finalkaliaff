# Final Client Submit Build

Updated: pinned top header, smooth add-to-cart fly animation, cart/order responsive position fix, and 3-step checkout design. Background video remains removed.

# Kaliaff Vercel + Firebase Fixed Build

## Added / Fixed

- Admin image upload works with ImgBB API, so it can run on Vercel free hosting.
- Mobile/PC responsive CSS improved for admin forms, tables, checkout and product grid.
- New order admin notification improved: popup + sound + vibration + browser notification.
- Customer order history now has **Send Update / দ্রুত খবর চান** button. It opens WhatsApp to admin with order ID and fast update request.
- Homepage top small video ad banner added. Admin Settings can control:
  - Video Banner ON/OFF
  - Label / title / subtitle
  - AI Video MP4 direct URL
- If video URL is empty, a clean animated burger promo banner is shown.

## Required Setup

1. Upload these files to GitHub / Vercel and redeploy.
2. Admin Panel > Settings > ImgBB Image Hosting: paste ImgBB API key, Test Upload, Save.
3. Admin Panel > Settings > Admin Alert / Customer Message Control:
   - Add Admin WhatsApp number in international format, example: 8801XXXXXXXXX
   - Press Notify ON/Test once in admin panel to allow browser notifications.
4. Admin Panel > Settings > Top Small Video Ad Banner:
   - Paste direct MP4 URL for burger/promo video.
   - Save settings.

## Video Tip

Free AI video makers you can try: Canva AI Video, CapCut, Kling AI, Pika, InVideo AI. Generate 5-8 sec burger promo video, download MP4, upload to any public hosting/CDN, and paste the MP4 direct URL in admin settings.


## Burger Video Banner Added
- তোমার দেওয়া video file ZIP-এর ভিতরে `assets/burger-promo.mp4` হিসেবে add করা হয়েছে।
- Website top banner-এ default ভাবে autoplay + muted + loop চলবে।
- Admin → Settings → Top Small Video Ad Banner থেকে ON/OFF করা যাবে।
- `AI Video MP4 Direct URL` খালি রাখলে local video চলবে; অন্য URL দিলে সেটা চলবে।
- Browser compatibility-এর জন্য video H.264 MP4 format-এ convert করা হয়েছে।


## Video Banner
- The website top banner uses the original uploaded video file: `assets/burger-promo.mp4`.
- It is set to autoplay, muted, loop, and plays inline for mobile browsers.
- Admin Settings video URL can remain empty to use this local video.


## Scroll Background Video Update
- Website background video file name: `Restaurant Background Video.mp4`
- Keep the file in the project root. A fallback copy is also kept at `assets/restaurant-background.mp4`.
- Scroll down/wheel down moves the video forward. Scroll up/wheel up moves it reverse. When scrolling stops, the video pauses on the current frame.
- Service worker no longer pre-caches MP4 videos, so mobile loading stays lighter and Range requests work smoothly.
- For best mobile performance, replace `Restaurant Background Video.mp4` with a compressed H.264 MP4 around 720p and preferably under 2-3 MB.


## Exact Background Video Update
- Root file: `Restaurant Background Video.mp4`
- Same video fallback: `assets/restaurant-background.mp4`
- Background video is visible behind the site content.
- Scroll down/touch down moves video forward; scroll up/touch up reverses it; when scrolling stops, video pauses.
- MP4 is not pre-cached by service worker to keep mobile loading light.


## Final live sync responsive patch
- Cart, live chat, bottom navigation responsive fixed for mobile and desktop.
- Admin Settings save updates Firestore settings/main and user site receives settings/foods/banners/notices with realtime listeners.
- Restaurant Background Video.mp4 remains as the scroll-controlled background video.
- MP4 files are not precached by service worker for smoother mobile loading.

## Update: No background video + cart/order fixed
- Website root background video removed.
- Cart drawer, checkout/order modal, live chat and bottom navigation fixed with responsive positioning.
- Admin save/live sync patch remains unchanged.
- Cache version updated to force fresh load after Vercel deploy.


## Client Submit Final Smooth Patch
- Header remains pinned/fixed.
- Product + button now shows a clear smooth fly-to-cart animation with cart count pulse.
- Product detail page now has a visible Bangla back button and separate “কার্টে যোগ” button while keeping “এখনই কিনুন” and WhatsApp buy.
- Cart drawer/open-close animation and cart item entrance are smoother.
- Live chat box position/animation is fixed for mobile and PC and will not overlap product/cart/checkout.
- Existing admin live sync, order, notification, image upload, checkout steps, PWA/cache and previous working features are preserved.


## Client Upload Final Patch
- WhatsApp/contact number set to 8801935019414 for user-side order, product WhatsApp, chat quick reply and admin fallback.
- Product detail back button made clear: “ফিরে যান”.
- Search/video banner made clearer with transparent glass searchbar.
- Cart add and “এখনই কিনুন” button now show smooth fly-to-cart animation.
- Checkout/order UI polished with close button, cleaner fields and mobile safe layout.
- Live chat reply box polished and WhatsApp quick contact fixed.
- PWA cache version updated.


## Final Stable Fix
- Product loading recovery added: Firebase slow/error holeo product grid blank/load hoye atke thakbe na.
- Product detail back button clear text.
- Product image zoom fullscreen.
- WhatsApp number fixed: 8801935019414.
- PC/mobile cart/checkout/live chat responsive polish retained.
