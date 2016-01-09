FROM ubuntu:wily
MAINTAINER caktux

ENV DEBIAN_FRONTEND noninteractive

# Usual update / upgrade
RUN apt-get update
RUN apt-get upgrade -q -y
RUN apt-get dist-upgrade -q -y

# Install Ethereum
RUN apt-get install -q -y software-properties-common
RUN add-apt-repository ppa:ethereum/ethereum
RUN add-apt-repository ppa:ethereum/ethereum-dev
RUN apt-get update
RUN apt-get install -q -y geth
RUN apt-get install -q -y solc
add test.pd /code/test.pd
EXPOSE 8545
EXPOSE 30303
run geth --password /code/test.pd  account new
ENTRYPOINT ["/usr/bin/geth"]
