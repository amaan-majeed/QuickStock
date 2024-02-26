# QuickStock
A React Based machine Learning Project
 that automates ordering, stock tracking, sales and generates reports; optimized inventory levels improve store efficiency.

## Versions

[Latest](https://docs.google.com/presentation/d/1xCcLJTOMYJ8PQbAC__HOvDYHZKjk5dk3J8jiXrmnk1k/edit) \
[Version 4](https://docs.google.com/document/d/1eyD3ssta1M_ggFq6GJaDky_YmyA9cXtm/edit) \
[Version 3](https://docs.google.com/document/d/1Xw2VrslMhif1rFqritd1bGzJ1lPlju2B/edit) \
[Version 2](https://docs.google.com/document/d/16fSmm-9pQVW1sa_Pc8qsjiEn3kRVXKg4/) \
[Version 1](https://docs.google.com/document/d/1UEI7C19bhARkPKWdNZ-WStNNjcXCcPwj6zhPaTukreM/edit#heading=h.1fob9te)

## Project Goal
To develop a cloud-based POS system that utilizes machine learning to predict product sales and manage inventory, with a focus on reducing the workload of store owners.

## Key Features

### Stock Prediction 
Leverages machine learning algorithms to analyze historical sales data and predict future demand for each product, enabling businesses to optimize their inventory levels and avoid stockouts.

### Cloud-Based
Offers the convenience of accessing the system from any device with an internet connection, eliminating the need for local installations and reducing the risk of data loss due to hardware failures.  

### Additional Features
- Includes a range of features commonly found in accounting software, such as profit summary, data export to PDF or Excel, and comprehensive reporting and analysis capabilities.
- Purchase processing - Allows customers to buy items, handle payments, update inventory
- Inventory management - Track stock levels across stores, analyze consumption patterns
- Product recommendations - Suggest additional products based on purchase history
- Sales reporting - Detailed sales reports, analytics on trends, bestsellers
- Multi-store monitoring - Remote access to reports across store locations 
- Supplier portal - Suppliers can view demand data to streamline logistics
- Accounting integration - Real-time sync of transaction data to accounting software
- Predictive analytics - ML model predicts stock needs and notifies stores for replenishment
- Inventory counting - Automated cycle counting from digital stock records


## Architecture

The system follows a microservices based architecture with the following key components:

- Frontend - React web app for customer and store facing features
- Backend APIs - Node.js services for business logic and data processing 
- Database - MongoDB stores transactional and reference data  
- ML Model - Trained on historical sales data to power recommendations and forecasting
- Event Bus - RabbitMQ handles communication between microservices
- Monitoring - Prometheus collects metrics, Grafana provides visualization dashboards


## Benefits

### Reduced Overhead
Automates inventory management tasks, freeing up store owners to focus on other aspects of their business.

### Increased Sales  
Optimizes inventory levels to ensure that products are always in stock, leading to increased sales and customer satisfaction.

### Improved Efficiency
Streamlines the checkout process with the camera credit system, reducing wait times and improving overall efficiency.  

### Enhanced Security
Utilizes facial recognition technology to prevent fraud and unauthorized purchases.

## Target Market

- Small to medium-sized retail businesses, particularly those with a high volume of sales and a diverse product range.
- Businesses that operate in seasonal industries or experience fluctuating demand for their products.
- Businesses that are looking to improve their inventory management practices and reduce the risk of stockouts.

## Competitive Advantage

- Combines the power of machine learning with a user-friendly interface and a range of additional features, making it a comprehensive and cost-effective solution for businesses of all sizes.
- Leverages the latest advancements in facial recognition technology to offer a secure and convenient credit system that enhances the customer experience.
- Cloud-based architecture ensures easy access, scalability, and data security, making it an ideal choice for businesses that are looking for a modern and reliable POS system.


## Usage

### Setting Up

1. Clone the repo
2. Install dependencies using `npm install`
3. Create .env files based on .env.example for environment variables
4. Set up MongoDB and RabbitMQ
5. Deploy frontend and backend services

### Running Tests

- Run `npm test` in backend service directories to test APIs
- `npm run test` in frontend to test React components

### Deployment 

The system is designed to be deployed on Kubernetes using Helm charts. Refer deploy/ folder.

## Documentation

- User guides and documentation are present in docs/
- API documentation using OpenAPI Spec is available at /api-docs endpoint
- Architecture diagrams and sequence diagrams present in design/

## Contributing

We welcome contributions to this open source POS system! Refer CONTRIBUTING.md for guidelines.

Please feel free to raise any issues or pull requests on GitHub.

Let me know if you need any part of the README explained or have additional queries!
