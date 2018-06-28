# Chapter 5: Deploy application on Kubernetes

Our goal for this section is to deploy our application with Kubernetes on IBM Cloud. 

## Instructions

We are going to create an IBM account, Kubernetes cluster, and deploy our application from a provided yaml file. 

Go here and pull down the repo. In this section, everything will need to be done locally. 

## Create IBM Cloud account and Kubernetes cluster

Go here and create an IBM Cloud account. You will get an email after you've registered to confirm your account. To get a free cluster, I have a list of promo codes I will hand out for you to input. Click the 'Manage' link on the upper right and click on 'Billing. This is where you can input your promo code under the promo code section.

Download the [IBM Cloud CLI](https://console.bluemix.net/docs/cli/reference/bluemix_cli/get_started.html#getting-started)

Downlaod the [Kubernetes CLI](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

Install the container service plugin.
```
$ ibmcloud plugin install container-service -r Bluemix
```

Log into your IBM Cloud account
```
$ ibmcloud login -a https://api.ng.bluemix.net
```

Create your cluster
```
$ ibmcloud cs cluster-create --name YOUR_CLUSTER_NAME
```

Configure Kubernetes cluster
```
$ bx cs cluster-config YOUR_CLUSTER_NAME
```

Copy and paste the response in the CLI.


## Dockerize application

You do not need to dockerize your application if you want to deploy the application. Skip to the next section and your app will be deployed by a public Docker image created previously. 

Create Docker account [here](https://cloud.docker.com/)

Install Docker CLI [here](https://docs.docker.com/install/)

Build Docker image
```
$ docker build -t IMAGE_NAME
```

Your image should be listed
```
$ docker images
```

Run your image
```
docker run -p 3000:3000 -d IMAGE_NAME
```

## Deploy application 

```
$ kubectl create -f deployment.yaml
```
