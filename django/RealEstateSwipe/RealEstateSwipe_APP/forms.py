from django import forms
from RealEstateSwipe_APP.models import Message, Conversation, User, Property, Advantage, Picture


class PictureForm(forms.ModelForm):

    class Meta:
        model = Picture
        fields = '__all__'

class PropertyForm(forms.ModelForm):

    class Meta:
        model = Property
        fields = '__all__'

class AdvantageForm(forms.ModelForm):

    class Meta:
        model = Advantage
        fields = '__all__'

class UserForm(forms.ModelForm):

    class Meta:
        model = User
        fields = '__all__'

class ConversationForm(forms.ModelForm):

    class Meta:
        model = Conversation
        fields = '__all__'

class MessageForm(forms.ModelForm):

    class Meta:
        model = Message
        fields = '__all__'
