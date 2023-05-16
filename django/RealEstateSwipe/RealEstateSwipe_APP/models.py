from django.db import models

# Create your models here.

class Advantage(models.Model):
    label = models.CharField(max_length=500,null=False)
    icon = models.CharField(max_length=20,null=False)

    def __str__(self):
        return str(self.id)


class Property(models.Model):
    label = models.CharField(max_length=20,null=False)

    class TypeChoice(models.TextChoices):
        HOUSE = 'HO', ('House')
        APPARTMENT = 'AP', ('Appartment')
        VACANTLOT = 'VL', ('Vacant Lot')
        COMMINDUS = 'CI', ('Commercial / Industrial Premises')
    type = models.CharField(max_length=2, choices=TypeChoice.choices, default=TypeChoice.APPARTMENT)
    
    address = models.CharField(max_length=100,null=False)
    city = models.CharField(max_length=50,null=False)
    country = models.CharField(max_length=50,null=False)
    description = models.CharField(max_length=500,null=False)
    surface = models.IntegerField(null=False)
    nbrRoom = models.IntegerField(null=False)
    price = models.FloatField(null=False)
    isRental = models.BooleanField(default=True)
    # iduser = models.ForeignKey(User,null=False,on_delete=models.CASCADE)
    advantages = models.ManyToManyField(Advantage)

    def __str__(self):
        return self.type + " " + str(self.id)


class Picture(models.Model):
    photo = models.ImageField(upload_to='images/',null=False,blank=False)
    idProperty = models.ForeignKey(Property,null=False,on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id) + " - Property " + str(self.idProperty)


class User(models.Model):
    firstName = models.CharField(max_length=30,null=False)
    lastName = models.CharField(max_length=30,null=False)
    email = models.CharField(max_length=30,null=False)
    password = models.CharField(max_length=30,null=False)
    liked = models.ManyToManyField(Property,related_name='liked_properties', blank=True)
    passed = models.ManyToManyField(Property,related_name='disliked_properties', blank=True)

    def __str__(self):
        return self.firstName + " " + self.lastName


try:
    Property.add_to_class('idUser',models.ForeignKey(User,null=False,on_delete=models.CASCADE))
except Exception as e:
    raise e


class Conversation(models.Model):
    idUser1 = models.ForeignKey(User,null=False,on_delete=models.CASCADE,related_name='first_user')
    idUser2 = models.ForeignKey(User,null=False,on_delete=models.CASCADE,related_name='second_user')
    idProperty = models.ForeignKey(Property,null=False,on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id) + " - " + self.idUser1.firstName + " " + self.idUser1.lastName + " / " + self.idUser2.firstName + " " + self.idUser2.lastName + " about " + str(self.idProperty)


class Message(models.Model):
    content = models.CharField(max_length=500,null=False)
    date = models.DateField(auto_now_add=True,auto_now=False)
    idUser = models.ForeignKey(User,null=False,on_delete=models.CASCADE)
    idConversation = models.ForeignKey(Conversation,null=False,on_delete=models.CASCADE, default=0)

    def __str__(self):
        return str(self.idUser) + ", " + str(self.date) + " on conversation number " + str(self.idConversation.id) 


