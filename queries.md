# Database Queries

## Find all customers with postal code 1010

SELECT * FROM Customers WHERE POSTALCODE = 1010;

Number of Records: 3
CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country
12	Cactus Comidas para llevar	Patricio Simpson	Cerrito 333	Buenos Aires	1010	Argentina
54	Océano Atlántico Ltda.	Yvonne Moncada	Ing. Gustavo Moncada 8585 Piso 20-A	Buenos Aires	1010	Argentina
64	Rancho grande	Sergio Gutiérrez	Av. del Libertador 900

## Find the phone number for the supplier with the id 11

SELECT PHONE FROM Suppliers WHERE SUPPLIERID = 11; 

Number of Records: 1
Phone
(010) 9984510

## List first 10 orders ever places, descending by the order date

SELECT * FROM Orders ORDER BY OrderDate DESC LIMIT 10;

Number of Records: 10
OrderID	CustomerID	EmployeeID	OrderDate	ShipperID
10443	66	8	1997-02-12	1
10442	20	3	1997-02-11	2
10440	71	4	1997-02-10	2
10441	55	3	1997-02-10	2
10439	51	6	1997-02-07	3
10438	79	3	1997-02-06	2
10436	7	3	1997-02-05	2
10437	87	8	1997-02-05	1
10435	16	8	1997-02-04	2
10433	60	3	1997-02-03	3

## Find all customers that live in London, Madrid, or Brazil

SELECT * FROM Customers WHERE City='London' OR City = 'Madrid' OR Country = 'Brazil';

Number of Records: 18
CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country
4	Around the Horn	Thomas Hardy	120 Hanover Sq.	London	WA1 1DP	UK
8	Bólido Comidas preparadas	Martín Sommer	C/ Araquil, 67	Madrid	28023	Spain
11	B's Beverages	Victoria Ashworth	Fauntleroy Circus	London	EC2 5NT	UK
15	Comércio Mineiro	Pedro Afonso	Av. dos Lusíadas, 23	São Paulo	05432-043	Brazil
16	Consolidated Holdings	Elizabeth Brown	Berkeley Gardens 12 Brewery	London	WX1 6LT	UK
19	Eastern Connection	Ann Devon	35 King George	London	WX3 6FW	UK
21	Familia Arquibaldo	Aria Cruz	Rua Orós, 92	São Paulo	05442-030	Brazil
22	FISSA Fabrica Inter. Salchichas S.A.	Diego Roel	C/ Moralzarzal, 86	Madrid	28034	Spain
31	Gourmet Lanchonetes	André Fonseca	Av. Brasil, 442	Campinas	04876-786	Brazil
34	Hanari Carnes	Mario Pontes	Rua do Paço, 67	Rio de Janeiro	05454-876	Brazil
53	North/South	Simon Crowther	South House 300 Queensbridge	London	SW7 1RZ	UK
61	Que Delícia	Bernardo Batista	Rua da Panificadora, 12	Rio de Janeiro	02389-673	Brazil
62	Queen Cozinha	Lúcia Carvalho	Alameda dos Canàrios, 891	São Paulo	05487-020	Brazil
67	Ricardo Adocicados	Janete Limeira	Av. Copacabana, 267	Rio de Janeiro	02389-890	Brazil
69	Romero y tomillo	Alejandra Camino	Gran Vía, 1	Madrid	28001	Spain
72	Seven Seas Imports	Hari Kumar	90 Wadhurst Rd.	London	OX15 4NB	UK
81	Tradição Hipermercados	Anabela Domingues	Av. Inês de Castro, 414	São Paulo	05634-030	Brazil
88	Wellington Importadora	Paula Parente	Rua do Mercado, 12	Resende	08737-363	Brazil

## Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"

INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country) VALUES ('The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111', 'Middle Earth')

## Update Bilbo Baggins record so that the postal code changes to "11122"

UPDATE Customers SET PostalCode = '11122' WHERE ContactName = 'Bilbo Baggins';

## (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

This provides a list of the unique cities
SELECT DISTINCT city FROM Customers ORDER BY city;

This provides a count of unique cities
SELECT COUNT (DISTINCT city) FROM Customers;

Number of Records: 1
COUNT (DISTINCT city)
69

## (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name

SELECT * FROM Suppliers WHERE length(SupplierName) > 10;

