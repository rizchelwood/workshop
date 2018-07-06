# Chapter 5: Deploy application on Kubernetes

Our goal for this section is to deploy our application with Kubernetes on IBM Cloud. 

## Instructions

We are going to create an IBM account, Kubernetes cluster, and deploy our application from a provided yaml file. 

Go [here](https://github.com/rizcheldayao/workshop) and clone the repo then go to the `chapter5-code-result` folder. In this section, everything will need to be done locally. 

## Create IBM Cloud account and Kubernetes cluster

Go [here](https://ibm.biz/BdYDAi) to create an IBM Cloud account. You will get an email after you've registered to confirm your account. To get a free cluster, I have a list of promo codes available [here](https://docs.google.com/spreadsheets/d/1TxSqPpL2BZhntPWLKinskJeUnoVVfU48Q9m8LXrbU64/edit?usp=sharing) to get a free cluster. 

Once you're logged into the IBM Cloud UI, click the 'Manage' link on the upper right and click on 'Billing. This is where you can input your promo code under the promo code section.

Download the [IBM Cloud CLI](https://console.bluemix.net/docs/cli/reference/bluemix_cli/get_started.html#getting-started)

Downlaod the [Kubernetes CLI](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

Install the container service plugin.
```
$ ibmcloud plugin install container-service -r Bluemix
```

Log into your IBM Cloud account
```
$ ibmcloud login
```

Create your cluster
```
$ ibmcloud cs cluster-create --name YOUR_CLUSTER_NAME
```
Your cluster will take a few minutes to deploy. You can check its status in the IBM Cloud UI if you click on the hamburger menu on the upper left hand side then go to 'Container'. It will be listed under the Clusters tab.

Configure Kubernetes cluster
```
$ ibmcloud cs cluster-config YOUR_CLUSTER_NAME
```

**You must copy and paste the response in the CLI.**


## Dockerize application

Create Docker account [here](https://cloud.docker.com/)

Install Docker CLI [here](https://docs.docker.com/install/)

Export your username
```
$ export docker_username="YOUR_DOCKER_USERNAME"
```

Build and push Docker image (the image will be built from the Dockerfile)
```
$ docker build -t $docker_username/workshop .
$ docker push $docker_username/workshop
```

Your image should be listed
```
$ docker images
```

Run your image in a container
```
docker run -p 3000:3000 -d $docker_username/workshop
```

You can access it at http://localhost:3000/. 

## Deploy application 

Modify the `deployment.yaml` file. Replace `<docker_username>` with your Docker username.

```
$ kubectl create -f deployment.yaml
```

Your application should be runing but you need to find the public IP Address of your cluster to access it.

Get the public IP Address of cluster node
```
# For clusters provisioned with IBM Cloud
$ ibmcloud cs workers YOUR_CLUSTER_NAME
```

## Final result

You can now access the application at http://IP_ADDRESS:30080 in your browser! Congratulations you've completed the workshop!! If you'd like to check out additional information on unit testing or Istio, check out the other sections. 

You can view an existing deployed application at http://169.62.129.200:30080/.
