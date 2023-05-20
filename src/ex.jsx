import React from 'react';

const ex = () => {
    return (
        <div>
            
            <p>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
            <p>
                An access token is a short-lived credential that is used to access protected resources. It is typically issued by an authorization server to a client application, such as a web browser or mobile app. Access tokens are typically used to access resources that are not publicly available, such as user data or private APIs.A refresh token is a long-lived credential that can be used to obtain new access tokens. It is typically issued by an authorization server to a client application, such as a web browser or mobile app. Refresh tokens are typically used to refresh access tokens that have expired or been revoked.
                <span>Access tokens and refresh tokens work like this:</span>
                User login gets access token and refresh token.
                User authentication is confirmed by the access token and the given resources can be accessed.
                When access token expires, get new access token by refresh token
                Goes and collects. The refresh token is stored in a secure location. On each request, user authentication is checked using the access token and access to the resource is granted. When the application receives the request, the access token needs to be stored on the client side.
            </p>
            <p>
                একটি অ্যাক্সেস টোকেন হল একটি স্বল্পকালীন শংসাপত্র যা সুরক্ষিত সংস্থানগুলি অ্যাক্সেস করতে ব্যবহৃত হয়। এটি সাধারণত একটি অনুমোদন সার্ভার দ্বারা একটি ক্লায়েন্ট অ্যাপ্লিকেশনে জারি করা হয়, যেমন একটি ওয়েব ব্রাউজার বা মোবাইল অ্যাপ। অ্যাক্সেস টোকেনগুলি সাধারণত এমন সংস্থানগুলি অ্যাক্সেস করতে ব্যবহৃত হয় যা সর্বজনীনভাবে উপলব্ধ নয়, যেমন ব্যবহারকারীর ডেটা বা ব্যক্তিগত API।
                একটি রিফ্রেশ টোকেন একটি দীর্ঘস্থায়ী শংসাপত্র যা নতুন অ্যাক্সেস টোকেন পেতে ব্যবহার করা যেতে পারে। এটি সাধারণত একটি অনুমোদন সার্ভার দ্বারা একটি ক্লায়েন্ট অ্যাপ্লিকেশনে জারি করা হয়, যেমন একটি ওয়েব ব্রাউজার বা মোবাইল অ্যাপ। রিফ্রেশ টোকেনগুলি সাধারণত এক্সেস টোকেনগুলিকে রিফ্রেশ করতে ব্যবহৃত হয় যা মেয়াদ শেষ হয়ে গেছে বা প্রত্যাহার করা হয়েছে৷
            </p>
            <p>
                Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web applications. It is designed to be easy to use and learn, and it is highly extensible. Express.js is used by a wide range of developers, from small startups to large enterprises.
                <br />
                Nest.js is a framework for building scalable, enterprise-grade Node.js applications. It is built on top of Express.js, and it provides a number of additional features, such as dependency injection, routing, and templating. Nest.js is designed to be easy to use and maintain, and it is well-suited for building complex applications.
            </p>
            <p>What is express js? What is Nest JS ?</p>
            <p>
                Express.js একটি লাইটওয়েট ওয়েব অ্যাপ্লিকেশন ফ্রেমওয়ার্ক যা নোড.জেএস (Node.js) জন্য ব্যবহৃত হয়। এটি একটি মিনিমালিস্টিক ফ্রেমওয়ার্ক যা ওয়েব অ্যাপ্লিকেশন তৈরি করতে সাহায্য করে এবং রাউটিং, মিডলওয়্যার, টেমপ্লেট ইঞ্জিন, কেন্দ্রীয় কনফিগারেশন এবং অন্যান্য কার্যকারিতা প্রদান করে। Express.js সহজেই একটি সাধারণ ওয়েব সার্ভার বা API সার্ভার তৈরি করতে ব্যবহার করা যায়।
                <br />
                Nest.js হলো একটি মডার্ন, স্কেলাবল ওয়েব অ্যাপ্লিকেশন ফ্রেমওয়ার্ক যা Node.js জন্য ডেভেলপ করা হয়েছে। এটি Typescript অথবা Javascript ব্যবহার করে ইউজারফ্রেন্ডলি সিনট্যাক্স এবং মডিউলারিটি উপস্থাপন করে। Nest.js একটি বাটারিজেস স্টার্টার প্যাকেজ এবং স্কেলাবল আর্কিটেকচার প্রদান করে যা একটি প্রফেশনাল ওয়েব অ্যাপ্লিকেশন তৈরি করতে সাহ
            </p>
            <p>What is MongoDB aggregate and how does it work ?</p>
            <p>
                MongoDB aggregates a dofttools pipeline to search and compile the complex data present. It uses complex results by preparing and establishing queries in the MongoDB database through sequencing and information processing technology.
                Aggregate work follows through an steps:
                1.Building multiple execution pipelines: In an aggregate pipeline you can use a word implementation, which can usually be match, form, sort, limit, etc. movements.
                2.Data Processing: Through the pipeline office you can process data, such as supplying data, changing data format, applying new filters, propagating field values, adding data, changing data, calculating sums, etc.
                3. Preparing the output: After all the deadlines, the output is set which is sent to the client.
                You can use the MongoDB Aggregate API (API) to process data by implementing all process aggregations and pipelines. Applying aggregate pipelines allows you to query complex data, file a data set, associate data, and perform other operations.
            </p>
            <p>
                MongoDB এগ্রিগেট হলো একটি পাওয়ারফুল পাইপলাইন অপারেশন যা কমপ্লেক্স ডেটা অনুসন্ধান এবং সংকলন করতে ব্যবহৃত হয়। এটি মডার্ন এবং গঠিত ডেটা প্রসেসিং প্রযুক্তির মাধ্যমে MongoDB ডেটাবেসে প্রশ্নীয় প্রস্তুত করে এবং প্রতিষ্ঠিত অপারেশনের মাধ্যমে কমপ্লেক্স রিসাল্ট পাওয়ার জন্য ব্যবহার করা হয়।

                এগ্রিগেট ওয়ার্কটি ফলো করে নিম্নলিখিত ধাপগুলির মাধ্যমে:

                ১.মাল্টিপল অপারেশনের পাইপলাইন তৈরি করা: একটি এগ্রিগেট পাইপলাইনে আপনি একটি বা একাধিক অপারেশন ব্যবহার করতে পারেন, যেগুলো সাধারণত ম্যাচ, গ্রুপ, সর্ট, লিমিট ইত্যাদি অপারেশন থাকতে পারে।
                ২.ডেটা প্রসেস করা: পাইপলাইনের প্রতিটি অপারেশনের মাধ্যমে আপনি ডেটা প্রসেস করতে পারেন, যেমন ডেটা সরবরাহ করা, ডেটা ফরম্যাটপরিবর্তন করা, নতুন ফিল্টার প্রয়োগ করা, ফিল্ডের মান উত্স করা, ডেটা যোগ করা, ডেটা পরিবর্তন করা, যোগফল গণনা করা ইত্যাদি।
                3. ফাইনাল আউটপুট প্রস্তুত করা: সমস্ত অপারেশন সম্পন্ন হওয়ার পরে, আউটপুট সেট প্রস্তুত করা হয় যা ক্লায়েন্টের জন্য প্রেরণ করা হয়।

                আপনি MongoDB এগ্রিগেট এপাই (API) ব্যবহার করে সমস্ত অপারেশন সংযোজন করতে পারেন এবং পাইপলাইন প্রয়োগ করে ডেটা প্রসেস করতে পারেন। এগ্রিগেট পাইপলাইন প্রয়োগ করার ফলে আপনি কমপ্লেক্স ডেটা অনুসন্ধান করতে পারেন, একটি ডেটা সেট গ্রুপ করতে পারেন, ডেটা সর্ট করতে পারেন এবং অন্যান্য প্রয়োজনীয় অপারেশন প্রয়োগ করতে পারেন।
            </p>















        </div>
    );
};

export default ex;