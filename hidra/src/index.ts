import grpc from 'grpc';

import './database';
import implementation from './implementation';
import loadProto from 'protos/dist/loader';

const proto = loadProto('hidra');
const server = new grpc.Server();

server.addService(proto['UserService'].service, implementation);

server.bind('0.0.0.0:3334', grpc.ServerCredentials.createInsecure());
server.start();
