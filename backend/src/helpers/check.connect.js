'use strict'

const mongoose = require('mongoose')
const os = require('os')
const process = require('process')
const _SECONDS = 5000
// count connect
const countConnect = () => {
    const numConnection = mongoose.connections.length
    console.log(`Number of connection:: ${numConnection}`)

}

//check over load 
const checkOverLoad = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss;

        //example maximum number of connection base on number of cores
        const maxConnections = numCores * 5;

        console.log(`Active connections: ${numConnection}`)
        console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`)

        if (numConnection > maxConnections) {
            console.log(`Connection over load detected!`)
        }

    }, _SECONDS) //monitor every 5 seconds
}

module.exports = {
    countConnect,
    checkOverLoad
};