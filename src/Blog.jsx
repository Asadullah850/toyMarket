import React from 'react';
import useTitle from './hooks/useTitle';

const Blog = () => {
    useTitle('Blogs')
    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-xl p-2 my-2 border-2 border-y-blue-600'>Qu.1- <span className=' font-semibold text-2xl'>Compare SQL and NoSQL databases?</span></h1>
            <p>
                <p className='text-xl p-2 mt-2 border-2 border-l-blue-600'>Answer :-</p> <br />
                <p>
                    SQL is a structured query language that works row by row whereas NoSQL works ID by id. SQL typically uses table-related routine techniques to store data, which can be structured and model-based. Storing data in SQL database requires specifying schema or table name, column name and data type. For data storage in NoSql databases, data is stored in string json or document model in databases.
                    <br />
                    SQL: SQL databases are commonly used for applications that require complex querying, structured data, and well-defined relationships. They excel in scenarios like financial systems, e-commerce platforms, and data warehousing. <br />
                    NoSQL: NoSQL databases are favored in scenarios with rapidly changing requirements, large-scale data storage, and flexible schemas. They are well-suited for use cases like real-time analytics, content management, social networks, and IoT applications.
                </p>
            </p>
            <div className="">
                {/* bangla */}
                <label htmlFor="my-modal-5" className="btn bg-blue-600">Bangla</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <p className="py-4">
                            SQL কাজ করে row পক্ষান্তরে NoSQL ID by id কাজ করে। SQL সাধারণত  ডেটা সংরক্ষণের জন্য টেবিলের সাথে সম্পর্কিত রাউটিন কৌশলের ব্যবহার হয়, যা স্ট্রাকচার এবং মডেল ভিত্তিক হতে পারে। SQL ডাটাবেসে ডেটা সংরক্ষণ করতে স্কিমা বা টেবিল নাম, স্তম্ভের নাম এবং ডেটা প্রকার নির্দিষ্ট করতে হয়। NoSql ডাটাবেসগুলিতে ডেটা সংরক্ষণের জন্য  ডাটাবেসগুলিতে ডেটা string  জেসন বা ডকুমেন্ট মডেলে সংরক্ষিত হয়।
                            <br />
                            SQL: SQL ডাটাবেসগুলি সাধারণত এমন অ্যাপ্লিকেশনগুলির জন্য ব্যবহৃত হয় যেগুলির জন্য জটিল অনুসন্ধান, কাঠামোগত ডেটা এবং সু-সংজ্ঞায়িত সম্পর্ক প্রয়োজন। তারা আর্থিক ব্যবস্থা, ই-কমার্স প্ল্যাটফর্ম এবং ডেটা
                            store  মতো পরিস্থিতিতে পারদর্শী। <br />
                            NoSQL: NoSQL ডাটাবেসগুলি দ্রুত পরিবর্তিত render , বৃহৎ আকারের ডেটা সঞ্চয়স্থান এবং নমনীয় স্কিমা সহ পরিস্থিতিতে পছন্দ করে। এগুলি রিয়েল-টাইম অ্যানালিটিক্স, কন্টেন্ট ম্যানেজমেন্ট, সোশ্যাল নেটওয়ার্ক এবং আইওটি অ্যাপ্লিকেশনের মতো ব্যবহারের ক্ষেত্রে উপযুক্ত।
                        </p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-5" className="btn">Close!</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* end */}
            <h1 className='text-xl p-2 my-2 border-2 border-y-blue-600'>Qu.2- <span className=' font-semibold text-2xl'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</span></h1>
            <p>
                <p className='text-xl p-2 mt-2 border-2 border-l-blue-600'>Answer :-</p> <br />
                <p>
                    An access token is a short-lived credential that is used to access protected resources. It is typically issued by an authorization server to a client application, such as a web browser or mobile app. Access tokens are typically used to access resources that are not publicly available, such as user data or private APIs.A refresh token is a long-lived credential that can be used to obtain new access tokens. It is typically issued by an authorization server to a client application, such as a web browser or mobile app. Refresh tokens are typically used to refresh access tokens that have expired or been revoked.
                    <span>Access tokens and refresh tokens work like this:</span>
                    User login gets access token and refresh token.
                    User authentication is confirmed by the access token and the given resources can be accessed.
                    When access token expires, get new access token by refresh token
                    Goes and collects. The refresh token is stored in a secure location. On each request, user authentication is checked using the access token and access to the resource is granted. When the application receives the request, the access token needs to be stored on the client side.
                </p>
            </p>
            <div className="">
                {/* bangla */}
                <label htmlFor="my-modal-6" className="btn bg-blue-600">Bangla</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <p className="py-4">
                            একটি অ্যাক্সেস টোকেন হল একটি স্বল্পকালীন শংসাপত্র যা সুরক্ষিত সংস্থানগুলি অ্যাক্সেস করতে ব্যবহৃত হয়। এটি সাধারণত একটি অনুমোদন সার্ভার দ্বারা একটি ক্লায়েন্ট অ্যাপ্লিকেশনে জারি করা হয়, যেমন একটি ওয়েব ব্রাউজার বা মোবাইল অ্যাপ। অ্যাক্সেস টোকেনগুলি সাধারণত এমন সংস্থানগুলি অ্যাক্সেস করতে ব্যবহৃত হয় যা সর্বজনীনভাবে উপলব্ধ নয়, যেমন ব্যবহারকারীর ডেটা বা ব্যক্তিগত API।
                            একটি রিফ্রেশ টোকেন একটি দীর্ঘস্থায়ী শংসাপত্র যা নতুন অ্যাক্সেস টোকেন পেতে ব্যবহার করা যেতে পারে। এটি সাধারণত একটি অনুমোদন সার্ভার দ্বারা একটি ক্লায়েন্ট অ্যাপ্লিকেশনে জারি করা হয়, যেমন একটি ওয়েব ব্রাউজার বা মোবাইল অ্যাপ। রিফ্রেশ টোকেনগুলি সাধারণত এক্সেস টোকেনগুলিকে রিফ্রেশ করতে ব্যবহৃত হয় যা মেয়াদ শেষ হয়ে গেছে বা প্রত্যাহার করা হয়েছে৷
                        </p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn">Close!</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* end */}
            <h1 className='text-xl p-2 my-2 border-2 border-y-blue-600'>Qu.3- <span className=' font-semibold text-2xl'>What is express js? What is Nest JS?</span></h1>
            <p>
                <p className='text-xl p-2 mt-2 border-2 border-l-blue-600'>Answer :-</p> <br />
                <p>
                    Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web applications. It is designed to be easy to use and learn, and it is highly extensible. Express.js is used by a wide range of developers, from small startups to large enterprises.
                    <br />
                    Nest.js is a framework for building scalable, enterprise-grade Node.js applications. It is built on top of Express.js, and it provides a number of additional features, such as dependency injection, routing, and templating. Nest.js is designed to be easy to use and maintain, and it is well-suited for building complex applications.
                </p>
            </p>
            <div className="w-full ">
                <img className='mx-auto my-4' src="https://i.ibb.co/9HyZtkp/Screenshot-179.png" alt="" srcset="" />
            </div>
            <div className="">
                {/* bangla */}
                <label htmlFor="my-modal-7" className="btn bg-blue-600">Bangla</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-7" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <p className="py-4">
                            Express.js একটি লাইটওয়েট ওয়েব অ্যাপ্লিকেশন ফ্রেমওয়ার্ক যা নোড.জেএস (Node.js) জন্য ব্যবহৃত হয়। এটি একটি মিনিমালিস্টিক ফ্রেমওয়ার্ক যা ওয়েব অ্যাপ্লিকেশন তৈরি করতে সাহায্য করে এবং রাউটিং, মিডলওয়্যার, টেমপ্লেট ইঞ্জিন, কেন্দ্রীয় কনফিগারেশন এবং অন্যান্য কার্যকারিতা প্রদান করে। Express.js সহজেই একটি সাধারণ ওয়েব সার্ভার বা API সার্ভার তৈরি করতে ব্যবহার করা যায়।
                            <br />
                            Nest.js হলো একটি মডার্ন, স্কেলাবল ওয়েব অ্যাপ্লিকেশন ফ্রেমওয়ার্ক যা Node.js জন্য ডেভেলপ করা হয়েছে। এটি Typescript অথবা Javascript ব্যবহার করে ইউজারফ্রেন্ডলি সিনট্যাক্স এবং মডিউলারিটি উপস্থাপন করে। Nest.js একটি বাটারিজেস স্টার্টার প্যাকেজ এবং স্কেলাবল আর্কিটেকচার প্রদান করে যা একটি প্রফেশনাল ওয়েব অ্যাপ্লিকেশন তৈরি করতে সাহায্য করে
                        </p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-7" className="btn">Close!</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* end */}
            {/* end */}
            <h1 className='text-xl p-2 my-2 border-2 border-y-blue-600'>Qu.4- <span className=' font-semibold text-2xl'>What is MongoDB aggregate and how does it work ?</span></h1>
            <p>
                <p className='text-xl p-2 mt-2 border-2 border-l-blue-600'>Answer :-</p> <br />
                <p>
                    MongoDB aggregates a dofttools pipeline to search and compile the complex data present. It uses complex results by preparing and establishing queries in the MongoDB database through sequencing and information processing technology.
                    Aggregate work follows through an steps:
                    1.Building multiple execution pipelines: In an aggregate pipeline you can use a word implementation, which can usually be match, form, sort, limit, etc. movements.
                    2.Data Processing: Through the pipeline office you can process data, such as supplying data, changing data format, applying new filters, propagating field values, adding data, changing data, calculating sums, etc.
                    3. Preparing the output: After all the deadlines, the output is set which is sent to the client.
                    You can use the MongoDB Aggregate API (API) to process data by implementing all process aggregations and pipelines. Applying aggregate pipelines allows you to query complex data, file a data set, associate data, and perform other operations.
                </p>
            </p>
            <div className="">
                {/* bangla */}
                <label htmlFor="my-modal-8" className="btn bg-blue-600">Bangla</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-8" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <p className="py-4">
                            MongoDB এগ্রিগেট হলো একটি পাওয়ারফুল পাইপলাইন অপারেশন যা কমপ্লেক্স ডেটা অনুসন্ধান এবং সংকলন করতে ব্যবহৃত হয়। এটি মডার্ন এবং গঠিত ডেটা প্রসেসিং প্রযুক্তির মাধ্যমে MongoDB ডেটাবেসে প্রশ্নীয় প্রস্তুত করে এবং প্রতিষ্ঠিত অপারেশনের মাধ্যমে কমপ্লেক্স রিসাল্ট পাওয়ার জন্য ব্যবহার করা হয়।

                            এগ্রিগেট ওয়ার্কটি ফলো করে নিম্নলিখিত ধাপগুলির মাধ্যমে: <br />
                            ১.মাল্টিপল অপারেশনের পাইপলাইন তৈরি করা: একটি এগ্রিগেট পাইপলাইনে আপনি একটি বা একাধিক অপারেশন ব্যবহার করতে পারেন, যেগুলো সাধারণত ম্যাচ, গ্রুপ, সর্ট, লিমিট ইত্যাদি অপারেশন থাকতে পারে। <br />
                            ২.ডেটা প্রসেস করা: পাইপলাইনের প্রতিটি অপারেশনের মাধ্যমে আপনি ডেটা প্রসেস করতে পারেন, যেমন ডেটা সরবরাহ করা, ডেটা ফরম্যাটপরিবর্তন করা, নতুন ফিল্টার প্রয়োগ করা, ফিল্ডের মান উত্স করা, ডেটা যোগ করা, ডেটা পরিবর্তন করা, যোগফল গণনা করা ইত্যাদি। <br />
                            3. ফাইনাল আউটপুট প্রস্তুত করা: সমস্ত অপারেশন সম্পন্ন হওয়ার পরে, আউটপুট সেট প্রস্তুত করা হয় যা ক্লায়েন্টের জন্য প্রেরণ করা হয়।

                            আপনি MongoDB এগ্রিগেট এপাই (API) ব্যবহার করে সমস্ত অপারেশন সংযোজন করতে পারেন এবং পাইপলাইন প্রয়োগ করে ডেটা প্রসেস করতে পারেন। এগ্রিগেট পাইপলাইন প্রয়োগ করার ফলে আপনি কমপ্লেক্স ডেটা অনুসন্ধান করতে পারেন, একটি ডেটা সেট গ্রুপ করতে পারেন, ডেটা সর্ট করতে পারেন এবং অন্যান্য প্রয়োজনীয় অপারেশন প্রয়োগ করতে পারেন।
                        </p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-8" className="btn">Close!</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* end */}

        </div>
    );
};

export default Blog;