import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <section className='container mt-2'>
                <h1 className='text-info'>Difference between javascript and nodejs?</h1>
                <article>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Javascript</th>
                                <th>NodeJS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Javascript is a programming language that is used for writing scripts on the website. </td>
                                <td>NodeJS is a Javascript runtime environment.</td>

                            </tr>
                            <tr>
                                <td>Javascript can only be run in the browsers.</td>
                                <td>We can run Javascript outside the browser with the help of NodeJS.</td>

                            </tr>
                            <tr>
                                <td>It is basically used on the client-side.</td>
                                <td >It is mostly used on the server-side.</td>

                            </tr>
                            <tr>
                                <td>Javascript is capable enough to add HTML and play with the DOM.	</td>
                                <td >Nodejs does not have capability to add HTML tags. </td>

                            </tr>
                            <tr>
                                <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</td>
                                <td >V8 is the Javascript engine inside of node.js that parses and runs Javascript. </td>
                            </tr>
                            <tr>
                                <td>Javascript is used in frontend development.</td>
                                <td >Nodejs is used in server-side development. </td>
                            </tr>
                            <tr>
                                <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </td>
                                <td >Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.  </td>
                            </tr>
                            <tr>
                                <td>Jt is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.</td>
                                <td >Nodejs is written in C, C++ and Javascript.</td>
                            </tr>

                        </tbody>
                    </Table>
                </article>
            </section>
            <section className='container mt-2'>
                <h1 className='text-info'>Differences between sql and nosql databases?</h1>
                <article>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>SQL</th>
                                <th>NoSQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).</td>
                                <td>Non-relational or distributed database system.</td>

                            </tr>
                            <tr>
                                <td>These databases have fixed or static or predefined schema</td>
                                <td> predefined schema	They have dynamic schema.</td>

                            </tr>

                            <tr>
                                <td>These databases are not suited for hierarchical data storage</td>
                                <td >These databases are best suited for hierarchical data storage. </td>

                            </tr>
                            <tr>
                                <td>These databases are best suited for complex queries.</td>
                                <td >These databases are not so good for complex queries </td>
                            </tr>
                            <tr>
                                <td>Vertically Scalable</td>
                                <td >Horizontally scalable. </td>
                            </tr>

                        </tbody>
                    </Table>
                </article>
            </section>
            <section className='container'>
                <article>
                    <h1 className='text-info'>When should you use nodejs and when should you use mongodb?</h1>
                    <p>
                        Frontend part deals with user interaction, A user can see only frontend part of application via web browsers
                        The database is mainly used as a storage unit of the application. All the data associated with the application is available in this database
                        Accepting the request from frontend server, searching the data from database and sending back the response to client’s browser is done by backend application.
                        Mainly there are two types of database management systems (DBMS): Relational and NoSQL DBMS

                        Relational DBMS manages the databases that store data in a structured format, using rows and columns

                        NoSQL DBMS manages the database that stores unstructured data in forms of collections and documents

                        You can choose any one of them as per requirement

                        MongoDB is a NoSQL DBMS, usually people prefer mongoDB for following reasons:

                        NoSQL Database Management Systems are more flexible than RDBMS
                        The expense of maintaining and even setting up a RDBMS is relatively high
                        MongoDB is an open source database management system (DBMS) that uses a document-oriented database model which supports various forms of data
                        It holds a set of collections and stores data as document
                        Can handle variety of data and huge amount of data
                        It offers a MongoDB Node.js Driver which provides a JavaScript API and implements the network protocol required to read and write from a local or remote MongoDB database
                        All you have to do is install NPM -mongodb package in your Application Code
                    </p>
                </article>
            </section>
        </div>
    );
};

export default Blogs;