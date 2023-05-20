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

        </div>
    );
};

export default Blog;