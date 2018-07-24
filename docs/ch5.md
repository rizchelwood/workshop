# Chapter 5: Deploy application on Kubernetes

Our goal for this section is to deploy our application with Kubernetes on IBM Cloud. 

## Instructions

We are going to create an IBM account, Kubernetes cluster, and deploy our application from a provided yaml file. 

Go [here](https://github.com/rizcheldayao/workshop) and clone the repo then go to the `chapter5-code-result` folder. In this section, everything will need to be done locally. 

## Create IBM Cloud account and Kubernetes cluster

1. Create an IBM account

Go [here](https://ibm.biz/BdYXCy) to create an IBM Cloud account. You will get an email after you've registered to confirm your account. 

2. Apply promo code

To get a free cluster, I have a list of promo codes available [here](https://docs.google.com/spreadsheets/d/1TxSqPpL2BZhntPWLKinskJeUnoVVfU48Q9m8LXrbU64/edit?usp=sharing) to get a free cluster. 

Once you're logged into the IBM Cloud UI, click the 'Manage' link in the header and click on 'Billing. This is where you can input your promo code under the promo code section.

3. Download the [IBM Cloud CLI](https://console.bluemix.net/docs/cli/reference/bluemix_cli/get_started.html#getting-started)

4. Downlaod the [Kubernetes CLI](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

5. Install the container service plugin.
```
ibmcloud plugin install container-service -r Bluemix
```

To verify that the plug-in is installed properly, run `ibmcloud plugin list`. The Container Service plug-in is displayed in the results as `container-service`.

6. Log into your IBM Cloud account
```
ibmcloud login
```

7. Create your cluster
```
ibmcloud cs cluster-create --name YOUR_CLUSTER_NAME
```
Your cluster will take a few minutes to deploy. You can check its status in the IBM Cloud UI if you click on the hamburger menu on the upper left hand side then go to 'Containers'. It will be listed under the Clusters tab. You can also create a cluster in the same location in the UI. 

8. Configure Kubernetes cluster
```
ibmcloud cs cluster-config YOUR_CLUSTER_NAME
```

9. **You must copy and paste the response in the CLI.**

Consider placing the EXPORT command in your bash profile to avoid running these commands every time you open a new shell.


## Dockerize application

> Docker is a tool that builds, ships, and runs applications using containers. Docker can package the application and deploy it as one package. 

1. Create Docker account [here](https://cloud.docker.com/)

2. Install Docker CLI [here](https://docs.docker.com/install/)

3. Export your username
```
export docker_username="YOUR_DOCKER_USERNAME"
```

4. Build and push Docker image (the image will be built from the Dockerfile)
```
docker build -t $docker_username/workshop .
docker push $docker_username/workshop
```

5. Your image should be listed
```
docker images
```

6. Run your image in a container
```
docker run -p 3000:3000 -d $docker_username/workshop
```

You can access it at http://localhost:3000/. 

## Deploy application 

> Kubernetes is an orchestration tool for automating and maintaining deployments, scaling and managing containerized applications. 

1. Modify the `deployment.yaml` file. Replace `<docker_username>` with your Docker username.

```
kubectl create -f deployment.yaml
```

Your application should be runing but you need to find the public IP Address of your cluster to access it.

2. Get the public IP Address of cluster node
```
# For clusters provisioned with IBM Cloud
ibmcloud cs workers YOUR_CLUSTER_NAME
```

## Final result

You can now access the application at http://IP_ADDRESS:30080 in your browser! Congratulations you've completed the workshop!! If you'd like to check out additional information on unit testing or Istio, check out the other sections. 

You can view an existing deployed application at [http://169.62.129.200:30080/](http://169.62.129.200:30080/).


### Resources
- IBM Cloud: [https://console.bluemix.net/](https://console.bluemix.net/)
- Docker: [http://docker.io/](http://docker.io/)
- Kubernetes: [https://kubernetes.io/](https://kubernetes.io/)
