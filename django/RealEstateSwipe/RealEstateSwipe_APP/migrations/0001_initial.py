# Generated by Django 4.2.1 on 2023-05-16 16:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Advantage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('label', models.CharField(max_length=500)),
                ('icon', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Property',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('label', models.CharField(max_length=20)),
                ('type', models.CharField(choices=[('HO', 'House'), ('AP', 'Appartment'), ('VL', 'Vacant Lot'), ('CI', 'Commercial / Industrial Premises')], default='AP', max_length=2)),
                ('address', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=50)),
                ('country', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=500)),
                ('surface', models.IntegerField()),
                ('nbrRoom', models.IntegerField()),
                ('price', models.FloatField()),
                ('isRental', models.BooleanField(default=True)),
                ('advantages', models.ManyToManyField(to='RealEstateSwipe_APP.advantage')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=30)),
                ('lastName', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=30)),
                ('password', models.CharField(max_length=30)),
                ('liked', models.ManyToManyField(related_name='liked_properties', to='RealEstateSwipe_APP.property')),
                ('passed', models.ManyToManyField(related_name='disliked_properties', to='RealEstateSwipe_APP.property')),
            ],
        ),
        migrations.AddField(
            model_name='property',
            name='idUser',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='RealEstateSwipe_APP.user'),
        ),
        migrations.CreateModel(
            name='Picture',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.ImageField(upload_to='images/')),
                ('idProperty', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='RealEstateSwipe_APP.property')),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(max_length=500)),
                ('date', models.DateField(auto_now_add=True)),
                ('iduser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='RealEstateSwipe_APP.user')),
            ],
        ),
        migrations.CreateModel(
            name='Conversation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idProperty', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='RealEstateSwipe_APP.property')),
                ('idUser1', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='first_user', to='RealEstateSwipe_APP.user')),
                ('idUser2', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='second_user', to='RealEstateSwipe_APP.user')),
            ],
        ),
    ]